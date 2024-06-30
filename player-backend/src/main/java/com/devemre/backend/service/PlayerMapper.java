package com.devemre.backend.service;

import com.devemre.backend.dto.PlayerRequest;
import com.devemre.backend.dto.PlayerResponse;
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

    public PlayerResponse toPlayerResponse(Player player) {
        return new PlayerResponse(
                player.getUsername(),
                player.getCharacterRace(),
                player.getCharacterClass(),
                player.getLevel()
        );
    }

}
