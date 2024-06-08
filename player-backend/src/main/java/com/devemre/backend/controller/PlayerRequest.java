package com.devemre.backend.controller;

import com.devemre.backend.character.CharacterClass;
import com.devemre.backend.character.CharacterRace;


public record PlayerRequest(
        String username,
        CharacterRace characterRace,
        CharacterClass characterClass
) {
}
