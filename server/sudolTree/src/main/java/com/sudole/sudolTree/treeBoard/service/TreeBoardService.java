package com.sudole.sudolTree.treeBoard.service;

import com.sudole.sudolTree.exception.BusinessLogicException;
import com.sudole.sudolTree.exception.ExceptionCode;
import com.sudole.sudolTree.treeBoard.dto.TreeBoardPostDto;
import com.sudole.sudolTree.treeBoard.entity.TreeBoard;
import com.sudole.sudolTree.treeBoard.repository.TreeBoardRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TreeBoardService {

    private final TreeBoardRepository treeBoardRepository;

    public TreeBoardService(TreeBoardRepository repository) {
        this.treeBoardRepository = repository;
    }

    /* 수돌트리 전체 글 찾기 */
    public List<TreeBoard> findTreeBoards() {
        return treeBoardRepository.findAll();
    }

    /* 수돌트리 특정 글 찾기 */
    public TreeBoard findTreeBoard(Long id) {
        return findVerifiedBoard(id);
    }

    /* 수돌트리 글 작성 */
    public TreeBoard saveTreeBoard(TreeBoard treeBoard) {
        return treeBoardRepository.save(treeBoard);
    }

    private TreeBoard findVerifiedBoard(Long id) {
        Optional<TreeBoard> optionalTreeBoard = treeBoardRepository.findById(id);
        return optionalTreeBoard.orElseThrow(() -> new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
    }


}

