module.exports = function(objArray) {
    const maxId = objArray.reduce(function(acc, curr){
        const id = parseInt(curr.id)
        return (id>acc) ? id : acc
    },-1)
    return (maxId + 1).toString()
}