import React from "react";
import AccountSettings from "./_components/AccountSettings";
import ChangePassword from "./_components/ChangePassword";

function Settings() {
  return (
    <div className="px-28">
      <div>
        <h2 className="text-md font-semibold">Your profile</h2>
        <p className="text-sm text-muted-foreground">
          Manage your klypzo profile
        </p>
      </div>

      <div>
        <AccountSettings />
        <ChangePassword />
      </div>
    </div>
  );
}

export default Settings;
