import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "../components/templetes/Header";
import Nav from "components/templetes/Nav";
import SelectMenuBottomsheet from "components/molecules/SelectMenuBottomsheet";
import AddIngredientBottomsheet from "components/molecules/AddIngredientBottomsheet";
import EditIngredientBottomsheet from "components/molecules/EditIngredientBottomsheet";
import styles from "./Layout.module.css";

function Layout({
    isModalShow,
    setIsModalShow,
    bottomsheetType,
    setBottomsheetType,
    isBottomsheetShow,
    setIsBottomsheetShow,
    isTwoDepthBottomsheetShow,
    setIsTwoDepthBottomsheetShow
}) {
    const location = useLocation()
    const pathname = location.pathname
    let headerStyle = styles.header_area
    let footerStyle = styles.footer_area
    let pageTitle

    const [refrigeratorCategories, setRefrigeratorCategories] = useState([])
    const [clickedRefrigerator, setClickedRefrigerator] = useState()
    const [selectedCategory, setSelectedCategory] = useState(null)

    const getCategories = async () => {
        const { data: categories } = await axios.get(`${process.env.REACT_APP_API_URL}/categories`)
        const categoriesByRefrigerator = categories.filter(category => {
            return category.type === "refrigerator"
        })
        setRefrigeratorCategories(categoriesByRefrigerator)
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        document.body.classList.toggle("unscrollable", isModalShow)
    }, [isModalShow])
    
    useEffect(() => {
        document.body.classList.toggle("unscrollable", isBottomsheetShow)
    }, [isBottomsheetShow])
    
    useEffect(() => {
        document.body.classList.toggle("unscrollable", isTwoDepthBottomsheetShow)
    }, [isTwoDepthBottomsheetShow])

    switch (pathname) {
        case "/setting":
            pageTitle = "설정"
            footerStyle = `${styles.footer_area} hide`
            break
        case "/quit":
        case "/refrigerator/edit":
            pageTitle = "탈퇴하기"
            footerStyle = `${styles.footer_area} hide`
            break
        case "/login":
        case "/diary":
        case "/recipe":
            headerStyle = `${styles.header_area} hide`
            footerStyle = `${styles.footer_area} hide`
            break
    }

    return (
        <div className={isModalShow || isBottomsheetShow || isTwoDepthBottomsheetShow
            ? `${styles.container} overlap`
            : `${styles.container}`
        }>
            <header className={headerStyle}>
                <Header
                    pageTitle={pageTitle}
                    setBottomsheetType={setBottomsheetType}
                    setIsBottomsheetShow={setIsBottomsheetShow}
                />
            </header>
            <main className={styles.main_area}>
                <Outlet
                    context={{
                        clickedRefrigeratorContext: [clickedRefrigerator, setClickedRefrigerator],
                        isModalShowContext: [isModalShow, setIsModalShow],
                        bottomsheetTypeContext: [bottomsheetType, setBottomsheetType],
                        isBottomsheetShowContext: [isBottomsheetShow, setIsBottomsheetShow],
                        isTwoDepthBottomsheetShowContext: [isTwoDepthBottomsheetShow],
                        refrigeratorCategoriesContext: [refrigeratorCategories],
                        selectedCategoryContext: [selectedCategory, setSelectedCategory],
                    }}
                    className={styles.main_area}
                />
            </main>
            <footer className={footerStyle}>
                <Nav />
            </footer>

            {/* 바텀시트 */}
            <SelectMenuBottomsheet
                bottomsheetType={bottomsheetType}
                setBottomsheetType={setBottomsheetType}
                isBottomsheetShow={isBottomsheetShow}
                setIsBottomsheetShow={setIsBottomsheetShow}
                setIsTwoDepthBottomsheetShow={setIsTwoDepthBottomsheetShow}
            />
            <AddIngredientBottomsheet
                bottomsheetType={bottomsheetType}
                isTwoDepthBottomsheetShow={isTwoDepthBottomsheetShow}
                setIsTwoDepthBottomsheetShow={setIsTwoDepthBottomsheetShow}
                refrigeratorCategories={refrigeratorCategories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            {
                clickedRefrigerator &&
                <EditIngredientBottomsheet
                    clickedRefrigerator={clickedRefrigerator}
                    bottomsheetType={bottomsheetType}
                    isBottomsheetShow={isBottomsheetShow}
                    setIsBottomsheetShow={setIsBottomsheetShow}
                    setIsModalShow={setIsModalShow}
                    isModalShow={isModalShow}
                    refrigeratorCategories={refrigeratorCategories}
                />
            }
        </div>
    );
}

export default Layout;
