export const toggleModalShow = (isModalShow, setIsModalShow) => {
    isModalShow === true
        ? setIsModalShow(false)
        : setIsModalShow(true)
}