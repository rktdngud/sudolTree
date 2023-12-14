package com.sudole.sudolTree.postBoard.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class PostBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postBoardId;

    private String nickname;
    private String password;
    private String contents;
}
