"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { plans } from "@/data/plans";

function PaymentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const plan = searchParams.get("plan") || "growth";
  const role = searchParams.get("role") || "founder";

  const selectedPlans = plans[role as keyof typeof plans] as Record<
    string,
    { id: string; name: string; price: number; description: string }
  >;

  const selectedPlan = selectedPlans?.[plan] || plans.founder.growth;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const gst = useMemo(
    () => Math.round(selectedPlan.price * 0.18),
    [selectedPlan.price]
  );

  const total = selectedPlan.price + gst;

  const validateField = (name: string, value: string) => {
    let error = "";

    if (name === "fullName" && value.trim().length < 3) {
      error = "Please enter valid founder name";
    }
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Please enter valid business email";
    }
    if (name === "phone" && !/^[0-9]{10}$/.test(value)) {
      error = "Please enter valid 10 digit mobile number";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handlePayment = () => {
    const updatedErrors = {
      fullName:
        formData.fullName.trim().length < 3
          ? "Please enter valid founder name"
          : "",
      email:
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
          ? "Please enter valid business email"
          : "",
      phone:
        !/^[0-9]{10}$/.test(formData.phone)
          ? "Please enter valid 10 digit mobile number"
          : "",
    };

    setErrors(updatedErrors);
    if (Object.values(updatedErrors).some(Boolean)) return;
    router.push(`/payment/checkout?plan=${plan}`);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* TOP */}
        <button
          onClick={() => router.back()}
          className="mb-8 inline-flex items-center gap-2 rounded-2xl border border-[#E8EDF5] bg-white px-5 py-3 text-sm font-semibold text-[#16214A] transition hover:bg-[#F8FAFC]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          {/* LEFT */}
          <div className="rounded-[36px] border border-[#E8EDF5] bg-white p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-5 py-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700">
                Secure Founder Payment
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-[#16214A]">
              Complete Your Payment
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#64748B]">
              Secure your startup ecosystem access, founder workflows and
              execution tools.
            </p>

            {/* FORM */}
            <div className="mt-10 grid gap-6">
              {/* NAME */}
              <div>
                <label className="text-sm font-semibold text-[#16214A]">
                  Founder Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter founder name"
                  className="mt-2 h-14 w-full rounded-2xl border border-[#E8EDF5] px-5 outline-none transition focus:border-sky-500"
                />
                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-semibold text-[#16214A]">
                  Business Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter business email"
                  className="mt-2 h-14 w-full rounded-2xl border border-[#E8EDF5] px-5 outline-none transition focus:border-sky-500"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm font-semibold text-[#16214A]">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className="mt-2 h-14 w-full rounded-2xl border border-[#E8EDF5] px-5 outline-none transition focus:border-sky-500"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-fit rounded-[36px] border border-[#E8EDF5] bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-[#16214A]">
              Order Summary
            </h2>

            <div className="mt-8 rounded-3xl bg-[#F8FAFC] p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black text-[#16214A]">
                    {selectedPlan.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#64748B]">
                    {selectedPlan.description}
                  </p>
                </div>
                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B]">Subtotal</span>
                  <span className="font-semibold text-[#16214A]">
                    ₹{selectedPlan.price}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B]">GST (18%)</span>
                  <span className="font-semibold text-[#16214A]">₹{gst}</span>
                </div>
                <div className="border-t border-[#E8EDF5] pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#16214A]">
                      Total
                    </span>
                    <span className="text-3xl font-black text-[#16214A]">
                      ₹{total}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="mt-8 flex h-14 w-full items-center justify-center rounded-2xl bg-[#16214A] text-sm font-semibold text-white transition hover:opacity-90"
            >
              Proceed Secure Payment
            </button>

            <p className="mt-5 text-center text-xs leading-6 text-[#64748B]">
              By continuing, you agree to secure founder onboarding, ecosystem
              access policies and protected startup workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#F5F7FB]">
          <p className="text-sm text-[#64748B]">Loading payment details...</p>
        </div>
      }
    >
      <PaymentContent />
    </Suspense>
  );
}