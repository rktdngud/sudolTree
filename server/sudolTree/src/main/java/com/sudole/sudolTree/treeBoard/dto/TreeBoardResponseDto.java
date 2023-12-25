package com.sudole.sudolTree.treeBoard.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TreeBoardResponseDto {
    private Long treeBoardId;
    private String nickname;
    private String contents;
    private int imageIndex;
}
