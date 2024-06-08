package com.devemre.backend.service;

import com.devemre.backend.controller.PlayerRequest;
import com.devemre.backend.entity.Player;
import org.springframework.stereotype.Service;

@Service
public class PlayerMapper {

    public Player toPlayer(PlayerRequest request) {
        return Player.builder()
                .username(request.username())
                .characterRace(request.characterRace())
                .characterClass(request.characterClass())
                .level(1)
                .build();
    }

}
