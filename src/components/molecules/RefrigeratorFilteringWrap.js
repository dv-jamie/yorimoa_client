import SelectButtonList from "./SelectButtonList";

function RefrigeratorFilteringWrap({
    categories,
    selectedCategory,
    setSelectedCategory
}) {
    return (
        <div>
            <div>
                <SelectButtonList
                    selectItems={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>
        </div>
    );
}

export default RefrigeratorFilteringWrap;