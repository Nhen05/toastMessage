function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('toast');
    if (main) {
      const toast = document.createElement('div');
      const icons = {
        success: 'bi bi-check2-circle',
        error: 'bi bi-x-circle-fill',
        warning: 'bi bi-exclamation-triangle-fill',
        info: 'bi bi-info-circle-fill'
      };
      const icon = icons[type];
  
      toast.classList.add('toast', `toast-${type}`);
      toast.innerHTML = `
        <div class="toast-icon">
          <i class="${icon}"></i>
        </div>
        <div class="toast-body">
          <h3 class="toast-title">${title}</h3>
          <p class="toast-msg">${message}</p>
        </div>
        <div class="toast-close">
          <i class="bi bi-x-circle-fill"></i>
        </div>
      `;
      toast.querySelector('.toast-close').onclick = function () {
        main.removeChild(toast);
      };
  
      main.appendChild(toast);
  
      // Auto remove after duration
      setTimeout(() => {
        if (main.contains(toast)) {
          toast.remove();
        }
      }, duration + 1000);
    }
  }
  
  function show(type) {
    const lowerType = type.toLowerCase();
    const config = {
      success: {
        title: 'Success',
        message: 'Đăng ký thành công'
      },
      error: {
        title: 'Error',
        message: 'Đăng ký thất bại'
      },
      info: {
        title: 'Info',
        message: 'Thông tin bổ sung cần thiết'
      },
      warning: {
        title: 'Warning',
        message: 'Cảnh báo: Thử lại quá nhiều lần'
      }
    };
  
    if (config[lowerType]) {
      toast({
        ...config[lowerType],
        type: lowerType,
        duration: 3000
      });
    }
  }
  toast({
    title: 'Welcome',
    message: 'Toast đã sẵn sàng!',
    type: 'info',
    duration: 3000
  });