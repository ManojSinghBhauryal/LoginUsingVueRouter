export const login = (name, password) => {
    if(['manoj'].includes(name) && ['manoj'].includes(password)){
        return true;
    }
    return false;
}
