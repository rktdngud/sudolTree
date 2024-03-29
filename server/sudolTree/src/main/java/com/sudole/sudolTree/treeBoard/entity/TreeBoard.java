package com.sudole.sudolTree.treeBoard.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class TreeBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long treeBoardId;

    private String nickname;
    private String contents;
    private int imageIndex;
}
