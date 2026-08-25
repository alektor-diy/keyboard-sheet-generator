(function(){
  const KEY='keyboard-sheet-generator:v1';
  const blankSheet=()=>({id:null,keyboardName:'',exhibitor:'',switchName:'',keycaps:'',typing:'',photo:'',description:''});
  window.SheetStorage={
    blankSheet,
    load(){try{const value=JSON.parse(localStorage.getItem(KEY));if(value&&value.version===1)return value;}catch(e){}return {version:1,template:'blank',current:blankSheet(),sheets:[]};},
    save(state){localStorage.setItem(KEY,JSON.stringify({version:1,template:state.template,current:state.current,sheets:state.sheets}));}
  };
})();
