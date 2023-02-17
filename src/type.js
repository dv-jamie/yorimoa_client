export const ColorType = {
    MAIN_ORANGE: "#E05E21",
    MAIN_YELLOW: "#FFDC00",
    DIM_GRAY: "#646464",
    GRAY: "#7A7A7A",
    SILVER: "#A8A8A8",
    GAINSBRO: "#E4E4E4"
}

// 바텀시트 타입
export const BottomsheetType = {
    SELECT_MENU: "selectMenu",
    ADD_INGREDIENT: "addIngredient",
    EDIT_INGREDIENT: "editIngredient"
}

// 모달창 타입
export const ModalType = {
    ALERT: "alert",
    CONFIRM: "confirm",
}

// 모달창 메시지
export const ModalMessageType = {
    LOGOUT: `정말 로그아웃 하시겠어요?\n로그인 화면으로 이동됩니다.`,
    CHECK_RESET: `정말 초기화하시겠어요?\n그동안 기록한 모든 데이터가 삭제돼요`,
    RESET_COMPLETED: "데이터 초기화가 완료되었습니다.",
    QUIT_COMPLETED: "탈퇴가 완료됐습니다.\n이용해 주셔서 감사합니다.",
}

// 모달창 확인 버튼
export const ModalConfirmButtonType = {
    CLOSE_MODAL: "closeModal",
    LINK_TO_LOGIN: "linkToLogin",
    RESET_DATA: "resetData",
    QUIT: "quit"
}

// 레시피 리스트 순서
export const RecipeOrderType = {
    CREATED_AT: 'createdAt',
    BOOKMARKS_COUNT: 'bookmarksCount',
    REPLIES_COUNT: 'repliesCount'
}

// 탈퇴 사유
export const QuitReasonType = {
    PRIVACY: "privacy",
    ERROR: "error",
    UIUX: "uiux",
    DATA_RESET: "dataReset",
    AD: "ad"
}