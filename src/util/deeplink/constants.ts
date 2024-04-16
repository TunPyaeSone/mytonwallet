export const TON_PROTOCOL = 'ton://';
export const TONCONNECT_PROTOCOL = 'tc://';
export const TONCONNECT_PROTOCOL_SELF = 'mytonwallet-tc://';
export const SELF_PROTOCOL = 'mtw://';
export const SELF_UNIVERSAL_URLS = ['https://my.tt', 'https://go.mytonwallet.org'];
export const TONCONNECT_UNIVERSAL_URL = 'https://connect.mytonwallet.org';
export const CHECKIN_URL = 'https://checkin.mytonwallet.org';
export const ALL_PROTOCOLS = [
  TON_PROTOCOL, TONCONNECT_PROTOCOL, TONCONNECT_PROTOCOL_SELF, SELF_PROTOCOL,
  ...SELF_UNIVERSAL_URLS, TONCONNECT_UNIVERSAL_URL, CHECKIN_URL,
];
