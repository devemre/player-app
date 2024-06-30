package com.devemre.backend.service;

import com.devemre.backend.dto.PlayerRequest;
import com.devemre.backend.dto.PlayerResponse;
import com.devemre.backend.entity.Player;
import com.devemre.backend.exception.PlayerNotFoundException;
import com.devemre.backend.exception.UsernameAlreadyExistsException;
import com.devemre.backend.repository.PlayerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlayerService {

    private final PlayerRepository repository;
    private final PlayerMapper mapper;

    public List<PlayerResponse> findAll() {
        return repository
                .findAll()
                .stream()
                .map(mapper::toPlayerResponse)
                .collect(Collectors.toList());
    }

    public PlayerResponse findPlayerByUsername(String username) {
        return repository.findPlayerByUsername(username)
                .map(mapper::toPlayerResponse)
                .orElseThrow(() -> new PlayerNotFoundException("Player: " + username + " not found!"));
    }

    public Player createPlayer(PlayerRequest request) {
        if (repository.findPlayerByUsername(request.username()).isPresent()) {
            throw new UsernameAlreadyExistsException("Username was already taken!");
        }

        return repository.save(mapper.toPlayer(request));
    }

}
