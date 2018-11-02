import SweetAlert from 'react-native-sweet-alert';

export const  showAlert_Error = () => {
    SweetAlert.showAlert({
      type: 'normal', // error, success, warning, progress (Android Only).
      title: 'Opp!',
      contentText: 'Có Lỗi Kết Nối Bạn Vui Lòng Thử Lại Nhé !',
    },
      acceptButtonCallback => console.log(acceptButtonCallback)
    )
  }

export const   showAlert_Success = (text) => {
    SweetAlert.showAlert({
      type: 'normal', // error, success, warning, progress (Android Only).
      title: 'Success!',
      contentText: text,
    },
      acceptButtonCallback => console.log(acceptButtonCallback)
    )
  }

export const   showAlert_Warning = (text) => {
    SweetAlert.showAlert({
      type: 'normal', // error, success, warning, progress (Android Only).
      title: 'Opp!',
      contentText: text,
    },
      acceptButtonCallback => console.log(acceptButtonCallback)
    )
  }