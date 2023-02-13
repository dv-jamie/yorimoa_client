import SelectButtonList from "./SelectButtonList";

function RefrigeratorFilteringWrap({
    categories
}) {
    const clickSelectButtonWrap= () => {
        console.log("click")
    }

    return (
        <div>
            <div
                onClick={clickSelectButtonWrap}
            >
                <SelectButtonList selectItems={categories} />
            </div>
        </div>
    );
}

export default RefrigeratorFilteringWrap;