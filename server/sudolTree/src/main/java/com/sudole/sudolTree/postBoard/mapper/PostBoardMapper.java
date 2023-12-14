package com.sudole.sudolTree.postBoard.mapper;

import com.sudole.sudolTree.postBoard.dto.PostBoardPostDto;
import com.sudole.sudolTree.postBoard.dto.PostBoardResponseDto;
import com.sudole.sudolTree.postBoard.entity.PostBoard;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PostBoardMapper {
    PostBoard postBoardPostDtoToPostBoard(PostBoardPostDto postBoardPostDto);

    PostBoardResponseDto postBoardToPostBoardResponseDto(PostBoard postBoard);
}
