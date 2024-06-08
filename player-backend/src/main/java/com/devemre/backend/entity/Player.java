package com.devemre.backend.entity;

import com.devemre.backend.character.CharacterClass;
import com.devemre.backend.character.CharacterRace;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
@Table(name = "players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;

    @Enumerated(EnumType.STRING)
    private CharacterRace characterRace;

    @Enumerated(EnumType.STRING)
    private CharacterClass characterClass;

    private Integer level;

}
