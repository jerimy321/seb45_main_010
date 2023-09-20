package com.codestates.connectInstructor.exception;

import lombok.Getter;

public enum ExceptionCode {
    NOT_AUTHORIZED(403, "NOT AUTHORIZED"),
    MEMBER_NOT_ACTIVE(403, "MEMBER NOT ACTIVE"),
    MEMBER_NOT_FOUND(404, "MEMBER NOT FOUND"),
    SUBJECT_NOT_FOUND(404, "SUBJECT NOT FOUND"),
    REGION_NOT_FOUND(404, "REGION NOT FOUND"),
    SUBJECT_EXISTS(409, "SAME SUBJECT-NAME ALREADY EXISTS"),
    TEACHER_SUBJECT_EXISTS(409, "SAME TEACHER_SUBJECT ALREADY ENROLLED"),
    TEACHER_REGION_EXISTS(409, "SAME TEACHER_REGION ALREADY ENROLLED"),
    REGION_EXISTS(409, "SAME REGION-NAME ALREADY EXISTS"),
    USED_EMAIL(409,  "USED EMAIL"),
    MATCH_NOT_FOUND(404, "MATCH NOT FOUND"),
    UNDEFINED_MATCH_STATUS(404, "UNDEFINED MATCH STATUS"),
    SCHEDULE_NOT_FOUND(404, "SCHEDULE NOT FOUND"),
    SOCIAL_USER_PASSWORD(403, "SOCIAL USER CANNOT CHANGE PASSWORD");


    @Getter
    private int code;

    @Getter
    private String message;
    ExceptionCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}