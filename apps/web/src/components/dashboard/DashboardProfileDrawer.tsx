import {
  X,
  User,
  Mail,
  Building2,
  LogOut,
} from "lucide-react";

interface DashboardProfileDrawerProps {
  profileOpen: boolean;
  setProfileOpen: (
    value: boolean
  ) => void;
}

export default function DashboardProfileDrawer({
  profileOpen,
  setProfileOpen,
}: DashboardProfileDrawerProps) {
  return (
    <>
      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-[90] bg-black/20 backdrop-blur-sm transition-all duration-300
        
        ${
          profileOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }
      `}
        onClick={() =>
          setProfileOpen(false)
        }
      />

      {/* DRAWER */}
      <div
        className={`fixed right-0 top-0 z-[100] h-screen w-full max-w-md border-l border-border/60 bg-white shadow-2xl transition-transform duration-300
        
        ${
          profileOpen
            ? "translate-x-0"
            : "translate-x-full"
        }
      `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-border/60 p-6">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-slate-800">
              Founder Profile
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Workspace account details
            </p>
          </div>

          <button
            onClick={() =>
              setProfileOpen(false)
            }
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-white transition hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="space-y-6 p-6">
          {/* PROFILE */}
          <div className="rounded-[32px] border border-primary/10 bg-primary/5 p-6 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-black text-white">
              K
            </div>

            <h3 className="mt-5 text-2xl font-black text-slate-800">
              Krishna Shah
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Founder
            </p>
          </div>

          {/* DETAILS */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-[#f8fbff] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <User className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Role
                </p>

                <h4 className="mt-1 font-bold text-slate-800">
                  Founder
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-[#f8fbff] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </p>

                <h4 className="mt-1 font-bold text-slate-800">
                  founder@startup.com
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-[#f8fbff] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Building2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Startup
                </p>

                <h4 className="mt-1 font-bold text-slate-800">
                  Startup Ka Mall
                </h4>
              </div>
            </div>
          </div>

          {/* LOGOUT */}
          <button className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 text-sm font-semibold text-red-600 transition hover:bg-red-100">
            <LogOut className="h-4 w-4" />

            Logout
          </button>
        </div>
      </div>
    </>
  );
}