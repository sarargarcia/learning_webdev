function cleanNames(name) {
    const newName = name.map(function(name){
        return name.trim();
    }
    )
    return newName;
}
