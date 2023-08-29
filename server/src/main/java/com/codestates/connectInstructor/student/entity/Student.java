package com.codestates.connectInstructor.student.entity;

import com.codestates.connectInstructor.common.MemberStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Student {
    //TODO 컬럼 제약 사항(길이 등등)은 프론트와 상의 후 추가
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, unique = true, updatable = false)
    private String email;

    private String password;

    private String name;

    @Column(columnDefinition = "TEXT")
    private String introduce;

    private boolean isOauth = false;

    @Enumerated(value = EnumType.ORDINAL)
    private MemberStatus status = MemberStatus.ACTIVE;

    private LocalDateTime lastLogin;
}
