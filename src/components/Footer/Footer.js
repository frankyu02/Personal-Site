import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <footer>
            <p>&copy; Frank Yu 2022 - {new Date().getFullYear()}</p>
        </footer>
    )
}