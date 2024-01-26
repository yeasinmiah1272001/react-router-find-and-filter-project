import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-cyan-500 p-3 items-center">
        <div className="mr-5 text-3xl font-bold">
          {" "}
          <Link to={"/"}>Cart</Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-96 max-w-xs"
          />
        </div>
        <div>
          <FaCartArrowDown className="w-24 h-10" />
        </div>
      </div>

      {/* nav wrap */}

      <div className="flex justify-between bg-cyan-400 p-3 items-center text-white">
        <div className="item font-bold">Filter by</div>
        <div className="item font-bold">No Filter</div>
        <div className="item font-bold">
          <Link to={"/mobile"}>Mobiles</Link>
        </div>
        <div className="item font-bold">Laptops</div>
        <div className="item font-bold">Tablets</div>
        <div className="item font-bold">29999</div>
        <div className="item font-bold">49999</div>
        <div className="item font-bold">69999</div>
        <div className="item font-bold">89999</div>
      </div>
    </>
  );
};

export default Navbar;
