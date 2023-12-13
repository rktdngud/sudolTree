package com.sudole.sudolTree.exception;

import lombok.Getter;

public enum ExceptionCode {
    BOARD_NOT_FOUND(404, "Board Not Found");

    @Getter
    private int code;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
