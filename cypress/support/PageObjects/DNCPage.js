class DNCPage {
    getWarningClose(){
        return ('[data-dismiss="modal"]');
    }
    getdropdownNavBar(){
        return('.dropdown');

    }
    selectDNC(){
        return('[href*="/dnc/manage"]')
    }
    uploadDnc(){
        return('[href="/dnc/upload"]')
    }

}
const dncPage = new DNCPage();
export default dncPage;