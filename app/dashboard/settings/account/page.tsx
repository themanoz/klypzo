import InputComponent from "@/components/InputComponent";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function page() {
  return (
    <>
      <h2 className="lg:text-lg font-medium">Account Details</h2>
      <p className="text-sm text-muted-foreground">
        Manage your klypzo profile
      </p>

      <div className="pt-2 space-y-2">
        <InputComponent label="First name" inputType="text" />
        <InputComponent label="Last name" inputType="text" />
        <InputComponent label="Email" inputType="email" />
        <Button className="w-full md:w-full lg:w-2/5">Update</Button>
      </div>

      <div className="pt-8 space-y-2">
        <h2>Delete Account</h2>
        <p className="text-sm text-muted-foreground">
          This action cannot be undone.
        </p>
        <AlertDialog>
          <AlertDialogTrigger className="border md:w-full text-sm lg:w-2/5 py-2 px-4 rounded-md border-red-500 text-red-500 hover:bg-transparent hover:text-red-500">
            Delete account
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Do you really want to delete your account?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete your account and remove your data
                from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="border border-red-500 text-red-500 bg-transparent hover:bg-transparent hover:text-red-500">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}

export default page;
