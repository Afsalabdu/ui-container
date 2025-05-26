import { HeaderMenuOption } from "@/types/organisms.types";
const HEADER_MENU_OPTIONS: HeaderMenuOption[] = [
    {
        id: "help-support",
        labelKey: "pages.helpSupport",
        href: "help-support",
    },
    {
        id: "profile",
        labelKey: "salutationsList.welcome",
        menuType: "custom",
    },
];
const MENU_IDS = {
    logout: "logout",
    privacyChoice: "your-privacy-choices",
    profile: "profile",
};

const constants = {
    
    HEADER_MENU_OPTIONS,
    MENU_IDS
};

export default constants;