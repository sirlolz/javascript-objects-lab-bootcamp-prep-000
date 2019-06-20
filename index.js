var recipes={
  
}
function updateObjectWithKeyAndValue(object, key, value){
 var newOb=object[key]=value
  return newOb
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
