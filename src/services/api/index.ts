import { createVmTable, getVmTable, getDummyTable } from "./vm.service";
const API_SERVICE = {
  VM: {
    CREATE: createVmTable,
    GET: getVmTable,
    GETDUMMY: getDummyTable
  },
};
export default API_SERVICE;
