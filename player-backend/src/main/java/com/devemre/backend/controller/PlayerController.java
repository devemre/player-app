package com.devemre.backend.controller;

import com.devemre.backend.entity.Player;
import com.devemre.backend.service.PlayerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/players")
@RequiredArgsConstructor
public class PlayerController {

    private final PlayerService service;

    @GetMapping
    public ResponseEntity<List<Player>> findAll() {
        List<Player> players = service.findAll();

        return ResponseEntity.ok(players);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Player> findByUsername(
            @PathVariable("username") String username
    ) {
        Player player = service.findPlayerByUsername(username);

        return ResponseEntity.ok(player);
    }

    @PostMapping
    public ResponseEntity<String> createPlayer(
            @RequestBody PlayerRequest request
    ) {
        Player player = service.createPlayer(request);

        return ResponseEntity.ok(String.format(
                "Our new %s was summoned as a %s. Welcome %s!",
                player.getCharacterClass(),
                player.getCharacterRace(),
                player.getUsername()));
    }

}
