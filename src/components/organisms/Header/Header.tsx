"use client";
import React, { useState } from "react";
import {
    Header as MerchHeader,
    VendorIdList
} from "@costco/merch-ui-components";
import { Box } from "@mui/material";
import { DropDownData } from "@costco/merch-ui-components/dist/types/types/molecules.types";
import CONSTANTS from "@/constants";
import GENERIC_CONSTANTS from "@/constants/generic.constants";
import { HeaderMenuOption } from "@/types/organisms.types";
import { SessionUserData } from "@/types/auth.types";
import useSession from "@/hooks/useSession";
// import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";

const Header = () => {
    // const t = useTranslations("common");
    const { session, loading } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const { vendorId } = useParams();
    const pathname = usePathname();

    // const reloadWithNewId = (selectedVendorId: number) => {
    //     const segments = pathname.split("/");
    //     segments[1] = selectedVendorId.toString();
    //     const newUrl = segments.join("/");
    //     window.location.href = process.env.NEXT_PUBLIC_APP_URL + newUrl;
    // };

    // const {
    //     userInfo,
    //     vendorIds,
    // }: {
    //     userInfo: SessionUserData | null;
    //     vendorIds: Array<DropDownData> | [];
    // } = session
    //     ? {
    //           userInfo: session.userInfo ?? null,
    //           vendorIds: session.sapVendors.map((sapVendor) => {
    //               return {
    //                   id: sapVendor.sapVendorNumber,
    //                   label: `${sapVendor.sapVendorName} : #${sapVendor.sapVendorNumber}`,
    //               };
    //           }),
    //       }
    //     : { userInfo: null, vendorIds: [] };

    // const getSubOptionLabel = (subOption: HeaderMenuOption) => {
    //     if (subOption.labelKey) {
    //         // return t(subOption.labelKey);
    //         return subOption.label;

    //     }
    //     return subOption.label;
    // };

    // const translatedMenuOptions =
    // CONSTANTS.ORGANISMS.HEADER_MENU_OPTIONS.filter(
    //     (item) => item !== null
    // ).map((option, index: number) => {
    //     const menu = {
    //         ...option,

    //         id: option.id || "id-" + index,
    //         label:
    //             option.id === CONSTANTS.ORGANISMS.MENU_IDS.profile
    //                 ? getSubOptionLabel(option) +
    //                   ` *${userInfo?.given_name || ""} ${userInfo?.family_name || ""}*`
    //                 : (getSubOptionLabel(option) ?? ""),
    //         options: option.options
    //             ? option.options.map((subOption) => ({
    //                   ...subOption,
    //                   label: getSubOptionLabel(subOption) ?? "",
    //               }))
    //             : undefined,
    //         href: option?.href ? `/${vendorId}/${option.href}` : undefined,
    //     };
    //     if (option.id === "profile") {
    //         menu.customMenu = !loading ? (
    //             <VendorIdList
    //                 id="vendorIdList"
    //                 email={userInfo?.email ?? ""}
    //                 name={`${userInfo?.given_name || ""} ${userInfo?.family_name || ""}`}
    //                 vendorIds={vendorIds}
    //                 onVendorIdChange={handleVendorSelection}
    //                 selectedVendorId={Number(vendorId)}
    //                 onLogout={() => handleLogout()}
    //             />
    //         ) : (
    //             <Box sx={{ p: 3 }}>{}</Box>
    //         );
    //     }
    //     return menu;
    // });

    // const handleLogout = () => {
    //     setIsLoading(true);
    //     window.location.href = GENERIC_CONSTANTS.AUTH.SIGN_OUT_PATH;
    // };

    // const handleVendorSelection = (selectedVendorId: DropDownData) => {
    //     if (
    //         vendorIds.includes(selectedVendorId) &&
    //         vendorId !== selectedVendorId.id.toString()
    //     ) {
    //         setIsLoading(true);
    //         reloadWithNewId(Number(selectedVendorId.id));
    //     }
    // };


    return (
        <>

            <MerchHeader
                menu={[
                    {
                        href: '#',
                        id: 'help-support',
                        label: 'Help & Support'
                    },
                    {
                        id: 'profile',
                        label: 'Welcome *User*',
                        options: [
                            {
                                helperText: 'User\'s Title',
                                id: 'user-dtls',
                                label: 'First/Last Name',
                                type: 'h3'
                            },
                            {
                                href: '/logout',
                                icon: "",
                                id: 'logout',
                                label: 'Log Out'
                            }
                        ]
                    }
                ]}
                onHamburgerClick={function Js() { }}
                title="Replatform Foundation"
                id="merch-header" />

        </>
    );
};

export default Header;
