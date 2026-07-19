"use client";

import { useState } from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  CreditCard,
  Landmark,
  ShieldCheck,
  Smartphone,
  Wallet,
} from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();

  const searchParams = useSearchParams();

const role =
  searchParams.get("role") ?? "founder";

const roleTitle = {
  founder: "Founder",
  advisor: "Advisor",
}[role] ?? "User";

  const [selectedMethod, setSelectedMethod] =
    useState("");

  const [upiId, setUpiId] =
    useState("");

  const [cardData, setCardData] =
    useState({
      cardNumber: "",
      cardHolder: "",
      expiry: "",
      cvv: "",
    });

  const [errors, setErrors] =
    useState({
      upiId: "",
      cardNumber: "",
      cardHolder: "",
      expiry: "",
      cvv: "",
    });

  const paymentMethods = [
    {
      title: "UPI Payment",
      icon: Smartphone,
      value: "upi",
    },

    {
      title: "Credit / Debit Card",
      icon: CreditCard,
      value: "card",
    },

    {
      title: "Net Banking",
      icon: Landmark,
      value: "bank",
    },

    {
      title: "Wallet Payment",
      icon: Wallet,
      value: "wallet",
    },
  ];

  const handlePayment = () => {
    if (selectedMethod === "upi") {
      if (
        !/^[\w.-]+@[\w]+$/.test(upiId)
      ) {
        setErrors((prev) => ({
          ...prev,
          upiId:
            "Please enter valid UPI ID",
        }));

        return;
      }
    }

    if (selectedMethod === "card") {
      const newErrors = {
        cardNumber:
          cardData.cardNumber.length <
          16
            ? "Please enter valid card number"
            : "",

        cardHolder:
          cardData.cardHolder.length <
          3
            ? "Please enter valid card holder name"
            : "",

        expiry:
          !/^\d{2}\/\d{2}$/.test(
            cardData.expiry
          )
            ? "Enter valid expiry date"
            : "",

        cvv:
          cardData.cvv.length < 3
            ? "Enter valid CVV"
            : "",
      };

      setErrors((prev) => ({
        ...prev,
        ...newErrors,
      }));

      const hasErrors =
        Object.values(
          newErrors
        ).some(Boolean);

      if (hasErrors) return;
    }

    setTimeout(() => {
      router.push(
        `/onboarding/${role}/success`
      );
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-[36px] border border-[#E8EDF5] bg-white p-8 shadow-sm">
        {/* TOP */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-5 py-2">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />

          <span className="text-xs font-semibold text-emerald-700">
            Secure Payment Gateway
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-black text-[#16214A]">
          Select Payment Method
        </h1>

        <p className="mt-3 text-[#64748B]">
          Complete secure {roleTitle.toLowerCase()} onboarding
          payment process.
        </p>

        {/* METHODS */}
        <div className="mt-10 grid gap-5">
          {paymentMethods.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                onClick={() =>
                  setSelectedMethod(
                    item.value
                  )
                }
                className={`flex items-center justify-between rounded-3xl border p-6 text-left transition ${
                  selectedMethod ===
                  item.value
                    ? "border-sky-500 bg-sky-50"
                    : "border-[#E8EDF5] bg-[#F8FAFC]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon className="h-6 w-6 text-[#16214A]" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#16214A]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#64748B]">
                      Secure payment processing
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* UPI */}
        {selectedMethod === "upi" && (
          <div className="mt-10 rounded-[32px] border border-[#E8EDF5] bg-[#F8FAFC] p-6">
            <label className="text-sm font-semibold text-[#16214A]">
              Enter UPI ID
            </label>

            <input
              type="text"
              value={upiId}
              onChange={(e) => {
                setUpiId(
                  e.target.value
                );

                setErrors((prev) => ({
                  ...prev,
                  upiId: "",
                }));
              }}
              placeholder="example@upi"
              className="mt-3 h-14 w-full rounded-2xl border border-[#E8EDF5] bg-white px-5 outline-none focus:border-sky-500"
            />

            {errors.upiId && (
              <p className="mt-2 text-sm text-red-500">
                {errors.upiId}
              </p>
            )}
          </div>
        )}

        {/* CARD */}
        {selectedMethod === "card" && (
          <div className="mt-10 rounded-[32px] border border-[#E8EDF5] bg-[#F8FAFC] p-6">
            <div className="grid gap-5">
              {/* CARD NUMBER */}
              <div>
                <label className="text-sm font-semibold text-[#16214A]">
                  Card Number
                </label>

                <input
                  type="text"
                  value={
                    cardData.cardNumber
                  }
                  onChange={(e) =>
                    setCardData(
                      (prev) => ({
                        ...prev,
                        cardNumber:
                          e.target.value,
                      })
                    )
                  }
                  placeholder="1234 5678 9012 3456"
                  className="mt-3 h-14 w-full rounded-2xl border border-[#E8EDF5] bg-white px-5 outline-none focus:border-sky-500"
                />

                {errors.cardNumber && (
                  <p className="mt-2 text-sm text-red-500">
                    {
                      errors.cardNumber
                    }
                  </p>
                )}
              </div>

              {/* HOLDER */}
              <div>
                <label className="text-sm font-semibold text-[#16214A]">
                  Card Holder Name
                </label>

                <input
                  type="text"
                  value={
                    cardData.cardHolder
                  }
                  onChange={(e) =>
                    setCardData(
                      (prev) => ({
                        ...prev,
                        cardHolder:
                          e.target.value,
                      })
                    )
                  }
                  placeholder="Enter card holder name"
                  className="mt-3 h-14 w-full rounded-2xl border border-[#E8EDF5] bg-white px-5 outline-none focus:border-sky-500"
                />

                {errors.cardHolder && (
                  <p className="mt-2 text-sm text-red-500">
                    {
                      errors.cardHolder
                    }
                  </p>
                )}
              </div>

              {/* EXPIRY + CVV */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-[#16214A]">
                    Expiry
                  </label>

                  <input
                    type="text"
                    value={
                      cardData.expiry
                    }
                    onChange={(e) =>
                      setCardData(
                        (prev) => ({
                          ...prev,
                          expiry:
                            e.target.value,
                        })
                      )
                    }
                    placeholder="MM/YY"
                    className="mt-3 h-14 w-full rounded-2xl border border-[#E8EDF5] bg-white px-5 outline-none focus:border-sky-500"
                  />

                  {errors.expiry && (
                    <p className="mt-2 text-sm text-red-500">
                      {
                        errors.expiry
                      }
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#16214A]">
                    CVV
                  </label>

                  <input
                    type="password"
                    value={cardData.cvv}
                    onChange={(e) =>
                      setCardData(
                        (prev) => ({
                          ...prev,
                          cvv:
                            e.target.value,
                        })
                      )
                    }
                    placeholder="***"
                    className="mt-3 h-14 w-full rounded-2xl border border-[#E8EDF5] bg-white px-5 outline-none focus:border-sky-500"
                  />

                  {errors.cvv && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.cvv}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BANK */}
        {selectedMethod === "bank" && (
          <div className="mt-10 rounded-[32px] border border-[#E8EDF5] bg-[#F8FAFC] p-6">
            <label className="text-sm font-semibold text-[#16214A]">
              Select Bank
            </label>

            <select className="mt-3 h-14 w-full rounded-2xl border border-[#E8EDF5] bg-white px-5 outline-none focus:border-sky-500">
              <option>
                HDFC Bank
              </option>

              <option>
                ICICI Bank
              </option>

              <option>
                SBI Bank
              </option>
            </select>
          </div>
        )}

        {/* WALLET */}
        {selectedMethod ===
          "wallet" && (
          <div className="mt-10 rounded-[32px] border border-[#E8EDF5] bg-[#F8FAFC] p-6">
            <label className="text-sm font-semibold text-[#16214A]">
              Select Wallet
            </label>

            <select className="mt-3 h-14 w-full rounded-2xl border border-[#E8EDF5] bg-white px-5 outline-none focus:border-sky-500">
              <option>
                Paytm Wallet
              </option>

              <option>
                PhonePe Wallet
              </option>

              <option>
                Amazon Pay
              </option>
            </select>
          </div>
        )}

        {/* BUTTON */}
        {selectedMethod && (
          <button
            onClick={handlePayment}
            className="mt-10 flex h-14 w-full items-center justify-center rounded-2xl bg-[#16214A] text-sm font-semibold text-white transition hover:opacity-90"
          >
            Pay Securely
          </button>
        )}

      </div>
    </div>
  );
}