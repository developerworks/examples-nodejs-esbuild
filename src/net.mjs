/**
 * Get the LAN ip address
 */
import os from "node:os";

let iptables = {};
const interfaces = Object.values(os.networkInterfaces());


let i;
let d;
if (["linux", "darwin"].includes(os.platform())) {
    for (i = 0; i < interfaces[1].length; ++i) {
        d = interfaces[1][i];
        if (d.family === "IPv4" && d.internal === false) {
            iptables["local_ip"] = d.address;
            iptables["mask"] = d.netmask;
            break;
        }
    }
} else if ("win32" === os.platform()) {
    for (i = 0; i < interfaces[0].length; ++i) {
        d = interfaces[0][i];
        if (d.family === "IPv4" && d.internal === false) {
            iptables["local_ip"] = d.address;
            iptables["mask"] = d.netmask;
            break;
        }
    }
}

export default {
    LOCAL_IP: iptables.local_ip,
    MASK: iptables.mask
};
