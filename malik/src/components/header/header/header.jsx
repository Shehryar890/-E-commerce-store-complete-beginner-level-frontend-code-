import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { dropAction } from "../../../store/mainstore";
import Dropdown from "./dropdown";
import { useState } from "react";

const Header = () => {
    const dispatch = useDispatch();
    const dropdown = useSelector((state) => state.dropdown);

    const [isEnglishVisible, setEnglishVisible] = useState(false);
    const [isUsdVisible, setUsdVisible] = useState(false);

    const englishOptions = ["English", "Urdu", "Spanish"];
    const usdOptions = ["USD", "Euro", "GBP"];

    const handleClick1 = () => {
        dispatch(dropAction.toggleEnglish());
        setEnglishVisible(!isEnglishVisible);
        if (isUsdVisible) setUsdVisible(false); // Hide USD dropdown when English is shown
    };

    const handleClick2 = () => {
        dispatch(dropAction.toggleUsd());
        setUsdVisible(!isUsdVisible);
        if (isEnglishVisible) setEnglishVisible(false); // Hide English dropdown when USD is shown
    };

    return (
        <div className="bg-black text-white flex flex-col   h-50  w-100 md:flex-row items-center justify-between h-24 p-4">
            <div className="text-center md:text-left font-bold text-2xl md:text-3xl lg:text-4xl uppercase mb-4 md:mb-0">
                <p className="whitespace-normal">upto 40% off best selling Clothes</p>
            </div>
            <div className="hidden md:flex md:flex-row md:items-center md:space-x-12 md:space-y-0 md:relative">

                <span
                    className="relative flex items-center justify-center text-lg md:text-2xl cursor-pointer"
                    onClick={handleClick1}
                    onMouseEnter={() => setEnglishVisible(true)}
                    onMouseLeave={() => setEnglishVisible(false)}
                >
                    Eng <IoIosArrowDown className="ml-1" />
                    <Dropdown options={englishOptions} isVisible={isEnglishVisible} setVisible={setEnglishVisible} />
                </span>

                <span
                    className="relative flex items-center justify-center text-lg md:text-2xl cursor-pointer"
                    onClick={handleClick2}
                    onMouseEnter={() => setUsdVisible(true)}
                    onMouseLeave={() => setUsdVisible(false)}
                >
                    Usd <IoIosArrowDown className="ml-1" />
                    <Dropdown options={usdOptions} isVisible={isUsdVisible} setVisible={setUsdVisible} />
                </span>
            </div>
        </div>
    );
};

export default Header;
