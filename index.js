var recipes={
  
}
function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({},object,{key:[value]})
 
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
