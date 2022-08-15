import React from "react";
import { Menu } from "semantic-ui-react";

function ProfileMenuTabs({
  activeItem,
  handleItemClick,
  followersLength,
  followingLength,
  ownAccount,
  loggedUserFollowStats,
  user,
  profile,
}) {
  return (
    <>
      <Menu pointing secondary>
        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={() => handleItemClick("profile")}
        />

        <Menu.Item
          name={`${followersLength} followers`}
          active={activeItem === "followers"}
          onClick={() => handleItemClick("followers")}
        />

        {ownAccount ? (
          <>
            <Menu.Item
              name={`${
                loggedUserFollowStats.following.length > 0
                  ? loggedUserFollowStats.following.length
                  : 0
              } following`}
              active={activeItem === "following"}
              onClick={() => handleItemClick("following")}
            />
            {/* {user.role === "dj" && profile.user._id === user._id && (
              <Menu.Item
                // name={`${followingLength} following-copys`}
                name={`create events`}
                active={activeItem === "following-copy"}
                onClick={() => handleItemClick("following-copy")}
              />
            )} */}

            {user.role === "dj" && profile?.user._id === user._id && (
              <Menu.Item
                // name={`${followingLength} following-copys`}
                name={`create events`}
                active={activeItem === "create-events"}
                onClick={() => handleItemClick("create-events")}
              />
            )}

            <Menu.Item
              name="Update Profile"
              active={activeItem === "updateProfile"}
              onClick={() => handleItemClick("updateProfile")}
            />

            <Menu.Item
              name="settings"
              active={activeItem === "settings"}
              onClick={() => handleItemClick("settings")}
            />
          </>
        ) : (
          <>
            <Menu.Item
              name={`${followingLength} following`}
              active={activeItem === "following"}
              onClick={() => handleItemClick("following")}
            />
          </>
        )}
      </Menu>
    </>
  );
}

export default ProfileMenuTabs;
