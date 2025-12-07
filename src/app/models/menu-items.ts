export interface MenuItems {
    icon: string;
    label: string;
    url?: string;
    submenu?: Submenu[];
    isOpen?: boolean;
}

export interface Submenu {
    label: string;
    url: string;
}