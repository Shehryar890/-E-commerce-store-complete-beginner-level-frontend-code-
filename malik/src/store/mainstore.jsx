import { configureStore, createSlice } from "@reduxjs/toolkit";
import promotions from "./slidyimg";
import menProducts from "./mens";
import kidsProducts from "./kids";
import womenProducts from "./women";
import trending from "./landing";
import Deals from "./deals";
import blogPosts from "./blog";
// src/redux/slices/productsSlice.js

// Sample initial state
const initialState = {
    products: [...menProducts, ...kidsProducts, ...womenProducts], // All products
    filteredProducts: [...menProducts, ...kidsProducts, ...womenProducts], // Products after filtering
    category: null,
    color: null,
    priceRange: null,
    selectedProduct: "",
    searchQuery: null
};
const initial = {
    cart: [],
    totalPrice : 0,
    isOpen : false,
}
const initialone = {
    blogPosts, // Your initial blog posts data
    userInfo: {
      name: '',
      email: ''
    }
  };
const ComentSlice = createSlice({
    name: "coments",
    initialState : initialone,
    reducers: {
      addComment: (state, action) => {
        const { postId, comment } = action.payload;
  
        // Find the specific blog post
        const post = state.blogPosts.find(post => post.id === postId);
  
        if (post) {
          // Add the new comment to the found post
          post.comments.push(comment);
        }
      },
      addReply: (state, action) => {
        const { postId, commentId, reply } = action.payload;
  
        // Find the specific blog post
        const post = state.blogPosts.find(post => post.id === postId);
  
        if (post) {
          // Find the specific comment within the found post
          const comment = post.comments.find(comment => comment.id === commentId);
  
          if (comment) {
            // Add the reply to the found comment
            comment.replies.push(reply);
          }
        }
      },
      setUserInfo: (state, action) => {
        state.userInfo = action.payload;
      }
    }
  });

const cartSlice = createSlice({
    name: "cart",
    initialState: initial,
        reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cart.find((item) => item.id === product.id);
            if (!existingProduct) {
                state.cart.push({ ...product, quantity: 1 });
            } else {
                existingProduct.quantity++;
            }
            state.totalPrice += product.price;
            state.isOpen = true; // Set isOpen to true when an item is added to cart
        },
        incrementQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) {
              item.quantity += 1;
              state.totalPrice += item.price;
            }
          },
          decrementQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item && item.quantity > 1) {
              item.quantity -= 1;
              state.totalPrice -= item.price;
            }
          },
          clearCart: (state) => {
            state.cart = [];
            state.totalPrice = 0;
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            const product = state.cart.find((item) => item.id === productId);
            if (product) {
                state.totalPrice -= product.price * product.quantity;
                state.cart = state.cart.filter((item) => item.id !== productId);
            }
            state.isOpen = state.cart.length > 0; // Keep isOpen true if cart has items
        },
        closeCart: (state) => {
            state.isOpen = false; // Set isOpen to false when closing cart preview
        }
    },
});




const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
            state.filteredProducts = action.payload; // Load all products initially
        },
        filterByCategory(state, action) {
            const category = action.payload;
            state.category = category;
            state.filteredProducts = state.products.filter(product => 
                category === 'all' || product.category === category
            );
        },
        filterByColor(state, action) {
            const color = action.payload;
            state.color = color;
            state.filteredProducts = state.products.filter(product => 
                !color || product.color === color
            );
        },
        filterByPrice(state, action) {
            const priceRange = action.payload;
            state.priceRange = priceRange;
            switch(priceRange) {
                case 'under-500':
                    state.filteredProducts = state.products.filter(product => product.price <= 500);
                    break;
                case '500-999':
                    state.filteredProducts = state.products.filter(product => product.price > 500 && product.price <= 999);
                    break;
                case '1000-1999':
                    state.filteredProducts = state.products.filter(product => product.price > 1000 && product.price <= 1999);
                    break;
                case '2000-5000':
                    state.filteredProducts = state.products.filter(product => product.price > 2000 && product.price <= 5000);
                    break;
                case 'over-5000':
                    state.filteredProducts = state.products.filter(product => product.price > 5000);
                    break;
                default:
                    state.filteredProducts = state.products; // Default to all products
            }
        },
        clearFilters(state) {
            state.filteredProducts = state.products; // Clear all filters
            state.category = null;
            state.color = null;
            state.priceRange = null;
        },
        setSelected(state, action) {
            state.selectedProduct = action.payload;
        },
        toggleSearch(state) {
            state.isOpen = !state.isOpen;
        },
        setIsOpen(state, action) {
            state.isOpen = action.payload; // Update isOpen state
        },
        setSearchQuery(state, action) {
            const query = action.payload?.toLowerCase() || '';
            state.searchQuery = query;
        
            // Log products for debugging
            console.log(state.products); 
        
            state.filteredProducts = state.products.filter(product => {
                console.log('Product:', product); // Check if product properties exist
                const productName = product.productName?.toLowerCase() || '';
                
                return productName.includes(query);
            });
        },
        clearSearchFilter(state) {
            state.searchQuery = '';
            state.searchFilter = '';
            state.filteredProducts = state.products; // Reset filtered products
        }
    }
});

const  DealSlice  =  createSlice({
    name : "deals", 
    initialState : Deals || [],
   

})

    const initialStage = {
        wishlist: [],
    };

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState : initialStage,
    reducers: {
        addToWishlist: (state, action) => {
            const product = action.payload;
            if (!state.wishlist.find((item) => item.id === product.id)) {
                state.wishlist.push(product);
            }
        },
        removeFromWishlist: (state, action) => {
            const productId = action.payload;
            state.wishlist = state.wishlist.filter((item) => item.id !== productId);
        },
    },
});



const previewSlice = createSlice({
    name: 'preview',
    initialState: {
        isPreview: false,
        isProduct: null,
        isproduct: null ,
        
    },
    reducers: {
        openFunc: (state, action) => {
            state.isPreview = true;
            state.isProduct = action.payload;
        },
        closeFunc: (state) => {
            state.isPreview = false;
            state.isProduct = null;
        }
    }
});

const dropSlice = createSlice({
    name: "dropdown",
    initialState: {
        isEnglish: false,
        isUs: false,
    },
    reducers: {
        toggleEnglish: (state) => {
            state.isEnglish = !state.isEnglish;
            state.isUs = false;
        },
        closeDrop: (state) => {
            state.isEnglish = false;
            state.isUs = false;
        },
        toggleUsd: (state) => {
            state.isUs = !state.isUs;
            state.isEnglish = false;
        },
    }
});

const openSlice = createSlice({
    name: "open",
    initialState: {
        isOpen: false,
    },
    reducers: {
        onOpen: (state) => {
            state.isOpen = !state.isOpen;
        },
        onClose: (state) => {
            state.isOpen = false;
        },
    }
});

const imgSlice = createSlice({
    name: "img",
    initialState: {
        promotions,
    },
});
const trendingSlice= createSlice({
    name: "trending",
    initialState: {
        trending,
    },
})

const mainStore = configureStore({
    reducer: {
     dropdown :dropSlice.reducer,
        open: openSlice.reducer,
        img: imgSlice.reducer,
        products: productsSlice.reducer,
        trending:trendingSlice.reducer,
        deals: DealSlice.reducer,
        preview: previewSlice.reducer,
        wishlist: wishlistSlice.reducer,
        cart: cartSlice.reducer,
        coments : ComentSlice.reducer
    }
});

export default mainStore;
export const dropAction = dropSlice.actions;
export const openAction = openSlice.actions;
export const productsAction = productsSlice.actions
export const  previewAction = previewSlice.actions
export const wishlistActions = wishlistSlice.actions;
export const cartActions = cartSlice.actions;
export const   comentAction = ComentSlice.actions;
