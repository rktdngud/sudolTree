package com.sudole.sudolTree.treeBoard.mapper;

import com.sudole.sudolTree.treeBoard.dto.TreeBoardPostDto;
import com.sudole.sudolTree.treeBoard.dto.TreeBoardResponseDto;
import com.sudole.sudolTree.treeBoard.entity.TreeBoard;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TreeBoardMapper {
    TreeBoard treeBoardPostDtoToTreeBoard(TreeBoardPostDto treeBoardPostDto);

    TreeBoardResponseDto treeBoardToTreeBoardResponseDto(TreeBoard treeBoard);
}
