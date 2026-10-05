
import { getUserOrders } from "@/CheckoutAction/getUserOrders.action";
import getMyToken from "@/Utilites/GetMyToken.utilites";


interface ShippingAddress {
  details?: string;
  city?: string;
  phone?: string;
}

interface Order {
  _id?: string;
  totalOrderPrice: number;
  paymentMethodType: string;
  shippingAddress?: ShippingAddress;
  cartItems?: unknown[];
}

export default async function Allorders() {
  const token = await getMyToken();

  // Check login
  if (!token) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800">
            Please log in first
          </h2>
          <p className="mt-2 text-gray-500">
            You need to login to see your orders.
          </p>
        </div>
      </div>
    );
  }

  const response: Order[] = await getUserOrders(token.id! || token.sub!);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-4 py-10 sm:px-6 lg:px-12">

      {/* Header */}
      <div className="mx-auto mb-8 max-w-7xl">
        <h1 className="text-3xl font-bold text-[#172033] sm:text-4xl">
          All Orders
        </h1>

        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          Here you can see all your past orders and their details.
        </p>
      </div>

      {/* Orders */}
      <div className="mx-auto flex max-w-7xl flex-col gap-5">

        {response.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center">
            <div className="mb-4 text-5xl">🛍️</div>

            <h2 className="text-2xl font-bold text-gray-800">
              No Orders Yet
            </h2>

            <p className="mt-2 text-gray-500">
              You haven't placed any orders yet.
            </p>
          </div>
        ) : (
          response.map((order, index) => (

            <div
              key={order._id || index}
              className="grid items-center gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md lg:grid-cols-[1.3fr_1.2fr_1fr_150px]"
            >

              {/* Order Information */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-lg font-bold text-[#172033]">
                    Order #{index + 1}
                  </h2>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                    ● Delivered
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-400">
                  Order #{order._id || index + 1}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-xl">🛍️</span>

                  <span>
                    {order.cartItems?.length || 0} Items
                  </span>
                </div>
              </div>


              {/* Shipping Address */}
              <div className="border-t border-gray-100 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">

                <h3 className="mb-3 text-sm font-semibold text-gray-500">
                  📍 Shipping Address
                </h3>

                <p className="text-sm text-gray-700">
                  {order.shippingAddress?.details || "No address available"}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {order.shippingAddress?.city || ""}
                </p>

                {order.shippingAddress?.phone && (
                  <p className="mt-1 text-sm text-gray-500">
                    {order.shippingAddress.phone}
                  </p>
                )}

              </div>


              {/* Payment */}
              <div className="border-t border-gray-100 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">

                <h3 className="text-sm font-semibold text-gray-500">
                  💳 Payment Method
                </h3>

                <p className="mt-2 text-sm capitalize text-gray-600">
                  {order.paymentMethodType}
                </p>

                <div className="mt-4 border-t border-gray-100 pt-3">

                  <span className="block text-xs text-gray-500">
                    Total Order Price
                  </span>

                  <strong className="mt-1 block text-xl font-bold text-[#172033]">
                    EGP {order.totalOrderPrice}
                  </strong>

                </div>

              </div>


              {/* Button */}
              <div className="border-t border-gray-100 pt-5 lg:border-0 lg:pt-0">

                <button
                  className="w-full rounded-xl bg-[#172033] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#26334d] hover:shadow-lg"
                >
                  View Details →
                </button>

              </div>

            </div>
          ))
        )}

      </div>
    </main>
  );
}
