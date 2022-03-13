import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const success = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto pt-64 px-5">
        <div className="flex flex-col p-10 bg-white mb-20">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been comfirmed
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation once your
            order item has shipped, if you would like to check the status of
            your order(s) please press the link below
          </p>
          <button
            className="button mt-8"
            onClick={() => router.push("/orders")}
          >
            Go to my orders
          </button>
        </div>
      </main>
      <div className="grid grid-cols-1 items-center object-center text-center md:grid-cols-4 gap-y-10 px-32 py-24 bg-amazon_blue-light w-full">
        <div className="space-y-4 text-xs text-white">
          <h5 className="font-extrabold text-sm">Get to know us</h5>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Amazon Devices</p>
          <p>Amazon Science</p>
        </div>
        <div className="space-y-4 text-xs text-white">
          <h5 className="font-extrabold text-sm">Make Money with Us</h5>
          <p>Sell Products on Amazon</p>
          <p>Sell on Amazon businesses</p>
          <p>Sell Apps on Amazon</p>
          <p>Become an Affliate</p>
          <p>Advertise your product</p>
        </div>
        <div className="space-y-4 text-xs text-white">
          <h5 className="font-extrabold text-sm">Amazon Payments</h5>
          <p>Amazon Business Card</p>
          <p>Shop with points</p>
          <p>Reload your balance</p>
          <p>Amazon currency converter</p>
          <p>Amazon currency converter</p>
        </div>
        <div className="space-y-4 text-xs text-white">
          <h5 className="font-extrabold text-sm">Let us Help You</h5>
          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your orders</p>
          <p>Shoppin rates</p>
          <p>Returns</p>
        </div>
      </div>
    </div>
  );
};

export default success;
