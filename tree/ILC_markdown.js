~function(w){
  if(!w) return
  if(Object.keys(w).includes("ILC_DEFS__")){
    w["ILC_DEFS__"] = ()=>{
      // Def here the functions and return in an object
      // Please, define here just the final functions. To use a support function, define outside the ILC_DEFS__ function
      // After test your function and apply here, explain the function in `tree/ILC.md`
      
      return {}
    }
  }
}(window)
