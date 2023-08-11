const LoadingReducer = (state, action) => {
   switch (action.type) {
      case "LOADSWITCHMODE": {
         return 'LOADSWITCHMODE'
      }
      case "LOADPAGE": {
         return 'LOADPAGE'
      }
      default:
         return state;
   }
}

const MenuReducer = (state, action) => {
   switch (action.type) {
      case "HOME": {
         return 'HOME'
      }
      case "PORTFOLIO": {
         return 'PORTFOLIO'
      }
      case "RESUME": {
         return 'RESUME'
      }
      case "CONTACT": {
         return 'CONTACT'
      }
      case "BLOG": {
         return 'BLOG'
      }
      default:
         return state;
   }
}

const reducers = {
   LoadingReducer,
   MenuReducer
};

export default reducers;