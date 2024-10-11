import { Button } from "@/components/ui/button";
import CreateProjectForm from "../Project/CreateProjectForm";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";

import React from "react";

import { PersonIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/Redux/Auth/Action";

const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="border-b py-4 px-5 flex items-center justify-between bg-rose-900 text-rose-100">
      <div className="flex items-center gap-3">
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer font-semibold"
        >
          Project Management
        </p>

        {/* Conditionally render the New Project button */}
        {location.pathname !== "/upgrade_plan" && (
          <Dialog>
            <DialogTrigger>
              <Button
                variant="ghost"
                className="text-rose-100 hover:text-white"
              >
                New Project
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="text-rose-100">
                Create New Project
              </DialogHeader>
              <CreateProjectForm />
            </DialogContent>
          </Dialog>
        )}

        <Button
          onClick={() => navigate("/upgrade_plan")}
          variant="ghost"
          className="text-rose-100 hover:text-white"
        >
          Upgrade
        </Button>
      </div>
      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-gray-500 text-rose-100 hover:border-rose-300"
            >
              <PersonIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-rose-800">
            <DropdownMenuItem
              className="text-rose-100 hover:bg-rose-700"
              onClick={handleLogout}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p className="text-sm">{auth.user?.fullName}</p>
      </div>
    </div>
  );
};

export default Navbar;
