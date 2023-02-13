import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import dummy from "../data.json";
import Header from "../components/templetes/Header";
import Nav from "components/templetes/Nav";
import styles from "./Layout.module.css";
import SelectMenuBottomsheet from "components/molecules/SelectMenuBottomsheet";
import AddIngredientBottomsheet from "components/molecules/AddIngredientBottomsheet";

function Layout() {
    const location = useLocation()
    const pathname = location.pathname
    let headerStyle = styles.header_area
    let footerStyle = styles.footer_area

    const refrigeratorCategoriesDummy = dummy.categories.filter(category => {
        return category.type === "refrigerator"
    })

    const [isModalShow, setIsModalShow] = useState(false)
    const [isBottomsheetShow, setIsBottomsheetShow] = useState(false)
    const [isTwoDepthBottomsheetShow, setIsTwoDepthBottomsheetShow] = useState(false)
    const [refrigeratorCategories, setRefrigeratorCategories] = useState(refrigeratorCategoriesDummy)

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
        case "/login":
        case "/diary":
        case "/recipe":
            headerStyle = `${styles.header_area} hide`
            footerStyle = `${styles.footer_area} hide`
            break
        case "/setting":
        case "/quit":
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
                    isBottomsheetShow={isBottomsheetShow}
                    setIsBottomsheetShow={setIsBottomsheetShow}
                />
            </header>
            <main className={styles.main_area}>
                <Outlet
                    context={{
                        isModalShowContext: [isModalShow, setIsModalShow],
                        refrigeratorCategoriesContext: [refrigeratorCategories],
                    }}
                    className={styles.main_area}
                />
            </main>
            <footer className={footerStyle}>
                <Nav />
            </footer>

            {/* 바텀시트 */}
            <SelectMenuBottomsheet
                isBottomsheetShow={isBottomsheetShow}
                setIsBottomsheetShow={setIsBottomsheetShow}
                setIsTwoDepthBottomsheetShow={setIsTwoDepthBottomsheetShow}
            />
            <AddIngredientBottomsheet
                isTwoDepthBottomsheetShow={isTwoDepthBottomsheetShow}
                setIsTwoDepthBottomsheetShow={setIsTwoDepthBottomsheetShow}
                refrigeratorCategories={refrigeratorCategories}
            />
        </div>
    );
}

export default Layout;
