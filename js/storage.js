(function(){
  const KEY='keyboard-sheet-generator:v1';
  const blankSheet=()=>({id:null,keyboardName:'',exhibitor:'',switchName:'',keycaps:'',typing:'',photo:'',description:''});
  window.SheetStorage={
    blankSheet,
    load(){try{const value=JSON.parse(localStorage.getItem(KEY));if(value&&value.version===1)return {version:1,template:['blank','nagare','tenkey','ttt'].includes(value.template)?value.template:'blank',showEventLogo:value.showEventLogo!==false,current:{...blankSheet(),...(value.current||{})},sheets:Array.isArray(value.sheets)?value.sheets:[]};}catch(e){}return {version:1,template:'blank',showEventLogo:true,current:blankSheet(),sheets:[]};},
    save(state){localStorage.setItem(KEY,JSON.stringify({version:1,template:state.template,showEventLogo:state.showEventLogo,current:state.current,sheets:state.sheets}));}
  };
})();
