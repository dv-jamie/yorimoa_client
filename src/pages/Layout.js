import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import dummy from "../data.json";
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

    const refrigeratorCategoriesDummy = dummy.categories.filter(category => {
        return category.type === "refrigerator"
    })

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
                        isModalShowContext: [isModalShow, setIsModalShow],
                        bottomsheetTypeContext: [bottomsheetType, setBottomsheetType],
                        isBottomsheetShowContext: [isBottomsheetShow, setIsBottomsheetShow],
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
            />
            <EditIngredientBottomsheet
                bottomsheetType={bottomsheetType}
                isBottomsheetShow={isBottomsheetShow}
                setIsBottomsheetShow={setIsBottomsheetShow}
                refrigeratorCategories={refrigeratorCategories}
            />
        </div>
    );
}

export default Layout;
